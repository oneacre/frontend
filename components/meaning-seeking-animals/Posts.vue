// <template>
// 	<% var post_margin = 40 %>

// 	<% var post_width = 500 + post_margin %>
// 	<% var post_height = 600 + post_margin %>


// 	<div class="ma_wrapper">
// 		<!-- Title -->
// 		<div class="ma_title">
// 			<h1>Meaning Seeking Animals</h1>
// 			<h2>Lisa van Casand</h2>
// 		</div>
// 		<div class="ma_background"></div>

// 		<!-- grid -->
// 		<div class="ma_container">
// 			<% for(var x=0; x<50; x++) { %>
// 			<% for(var y=0; y<30; y++) { %>
// 			<div class="ma_coordinate_wrapper" style="left:<%= x*post_width + 20 %>px; top:<%= y*post_height + 20 %>px">
// 				<div class="ma_coordinate" id="x<%= x %>-y<%= y %>">
// 					<p>
// 						<%= x %>,
// 						<%= y %>
// 					</p>
// 				</div>
// 			</div>
// 			<% } %>
// 			<% } %>
// 		</div>

// 		<!-- posts -->
// 		<div class="ma_container">

// 			<%  %>
// 			<% for(var i=0; i < results.length; i++) { %>
// 			<% if (typeof results[i].coordinates == 'object' && results[i].coordinates) {  %>
// 			<div class="ma_post" id="x<%= results[i].coordinates.x %>-y<%= results[i].coordinates.y %>" style="left:<%= results[i].coordinates.x*post_width %>px; top:<%= results[i].coordinates.y*post_height %>px">
// 				<span class="ma_position">X:
// 					<%= results[i].coordinates.x %>, </span>
// 				<span class="ma_position">Y:
// 					<%= results[i].coordinates.y %></span>
// 				<% } else {%>
// 				<div class="ma_post" id="x0-y0" style="left:0px; top:0px">
// 					<span class="ma_position">X:0, Y:0</span>
// 					<% } %>
// 					<h3 class="balance-text">
// 						<%= results[i].title %>
// 					</h3>
// 					<p class="ma_text">
// 						<%- results[i].content.replace(/(?:\\[(n)]|[\n])/g, '<br>') %>
// 						<img src="<%= results[i].image %>" alt="">
// 					</p>
// 					<div class="ma_post_reference_inputs">
// 						<% function wrap(type, inner) {return '<span class="' + type + '">' + inner + '</span>'} %>
// 						<div class="source" id="<%= results[i].references %>">
// 							<% Object.keys(results[i].inputs).forEach(function(prop) { %>
// 							<%- results[i].inputs[prop] ? wrap(prop, results[i].inputs[prop]) : "" %>
// 							<% }); %>
// 						</div>
// 					</div>
// 					<cite class="ma_post_reference_preview"></cite>
// 					<div class="ma_select"></div>
// 				</div>
// 				<% } %>
// 			</div>
// 		</div>
// 	</div>
// </template>

// <script>
// import MinimapSVG from '~/components/meaning-seeking-animals/MinimapSVG'

// export default {
//   components: {
//     MinimapSVG
//   }
// }
// </script>

// <style>
// </style>
