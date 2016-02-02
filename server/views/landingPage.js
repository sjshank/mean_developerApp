<html ng-app>
	<head>
		<title>{{title}}</title>
		<script type="text/javascript" src="/angular/angular.js"></script>
<script type="text/javascript" src="/js/controllers/landingPageController.js"></script>
	</head>
<body>

	<div ng-controller="landingPageCtrl">
		<h1>There are {{developerCount}} MEAN Stack Developers</h1>
		<ul>
			<li ng-repeat="developer in developers">
				{{developer.name}} - {{developer.city}}
			</li>
		</ul>
	</div>
	
</body>

</html>
