<template>
  <div>
    <div class="editor" v-if="editor">
      <menu-bar class="editor__menu" :editor="editor" />
      <editor-content class="editor__content" :editor="editor" />
      <div class="editor__bottom-bar">
        <div :class="`editor__status editor__status--${status}`">
          {{ status }}
          <template v-if="status === 'connected'">
            as {{ currentUser.name }},
            {{ users.length }} user{{ users.length === 1 ? '' : 's' }} online
          </template>
        </div>
        <div class="editor__actions">
          <button @click="setName">
            Set Name
          </button>
          <button @click="updateCurrentUser({ name: getRandomName() })">
            Random Name
          </button>
        </div>
      </div>
    </div>

    <div class="collaboration-users">
      <div
        class="collaboration-users__item"
        :style="`background-color: ${otherUser.color}`"
        v-for="otherUser in users"
        :key="otherUser.clientId"
      >
        {{ otherUser.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, defaultExtensions } from '@tiptap/vue-starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import MenuBar from './MenuBar.vue'

const CustomTaskItem = TaskItem.extend({
  content: 'paragraph',
})

const getRandomElement = list => {
  return list[Math.floor(Math.random() * list.length)]
}

export default {
  components: {
    EditorContent,
    MenuBar,
  },

  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || {
        name: this.getRandomName(),
        color: this.getRandomColor(),
      },
      indexdb: null,
      editor: null,
      users: [],
      status: 'connecting',
    }
  },

  mounted() {
    const ydoc = new Y.Doc()
    const provider = new WebsocketProvider('ws://localhost:8080/', 'oa-collaboration-example', ydoc)
    provider.on('status', event => {
      console.log('event.status', event.status)
      this.status = event.status
    })

    this.indexdb = new IndexeddbPersistence('oa-collaboration-example', ydoc)

    this.editor = new Editor({
      extensions: [
        ...defaultExtensions().filter(extension => extension.config.name !== 'history'),
        Highlight,
        TaskList,
        CustomTaskItem,
        Collaboration.configure({
          provider,
        }),
        CollaborationCursor.configure({
          provider,
          user: this.currentUser,
          onUpdate: users => {
            this.users = users
          },
        }),
      ],
    })

    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  },

  methods: {
    setName() {
      const name = (window.prompt('Name') || '')
        .trim()
        .substring(0, 32)

      if (name) {
        return this.updateCurrentUser({
          name,
        })
      }
    },

    updateCurrentUser(attributes) {
      this.currentUser = { ...this.currentUser, ...attributes }
      this.editor.chain().focus().user(this.currentUser).run()

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    },

    getRandomColor() {
      return getRandomElement([
        '#A975FF',
        '#FB5151',
        '#FD9170',
        '#FFCB6B',
        '#68CEF8',
        '#80CBC4',
        '#9DEF8F',
      ])
    },

    getRandomName() {
      return getRandomElement([
        'Lea Thompson', 'Cyndi Lauper', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 'Winona Ryder', 'Christina Applegate', 'Alyssa Milano', 'Molly Ringwald', 'Ally Sheedy', 'Debbie Harry', 'Olivia Newton-John', 'Elton John', 'Michael J. Fox', 'Axl Rose', 'Emilio Estevez', 'Ralph Macchio', 'Rob Lowe', 'Jennifer Grey', 'Mickey Rourke', 'John Cusack', 'Matthew Broderick', 'Justine Bateman', 'Lisa Bonet',
      ])
    },
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
.editor {
  color: black;
  background-color: white;
  border: 1px solid rgba(black, 0.1);
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  &__menu {
    display: flex;
    flex-wrap: nowrap;
    padding: 0.25rem;
    border-bottom: 1px solid rgba(black, 0.1);
  }

  &__content {
    padding: 1rem;
    max-height: 30rem;
    overflow: auto;

    &::-webkit-scrollbar-thumb {
      background-color: rgba(black, 0.1);
    }
  }

  &__bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    white-space: nowrap;
    padding: 0.25rem 0 0.25rem 0.25rem;
    border-top: 1px solid rgba(black, 0.1);
  }

  /* Some information about the status */
  &__status {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    margin-top: 1rem;
    padding: 0.25rem 0.5rem;
    color: rgba(black, 0.5);
    white-space: nowrap;

    &::before {
      content: ' ';
      flex: 0 0 auto;
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(black, 0.5);
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    &--connecting::before {
      background: #FD9170;
    }

    &--connected::before {
      background: #9DEF8F;
    }
  }

  &__actions {
    button {
      background: none;
      border: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      color: rgba(black, 0.5);
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      margin-right: 0.25rem;

      &:hover {
        color: black;
        background-color: rgba(black, 0.05);
      }
    }
  }
}
</style>

<style lang="scss">
/* A list of all available users */
.collaboration-users {
  margin-top: 0.5rem;

  &__item {
    display: inline-block;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;
    color: white;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

// .collaboration-status {
//   border-radius: 5px;
//   margin-top: 1rem;
//   color: #616161;

//   &::before {
//     content: ' ';
//     display: inline-block;
//     width: 0.5rem;
//     height: 0.5rem;
//     background: #ccc;
//     border-radius: 50%;
//     margin-right: 0.5rem;
//   }

//   &--connecting::before {
//     background: #fd9170;
//   }

//   &--connected::before {
//     background: #9DEF8F;
//   }
// }

/* Give a remote user a caret */
.collaboration-cursor__caret {
  position: relative;
  margin-left: -1px;
  margin-right: -1px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  word-break: normal;
  pointer-events: none;
}

/* Render the username above the caret */
.collaboration-cursor__label {
  position: absolute;
  top: -1.4em;
  left: -1px;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  color: black;
  padding: 0.1rem 0.3rem;
  border-radius: 3px 3px 3px 0;
  white-space: nowrap;
}

/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      > input {
        flex: 0 0 auto;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
