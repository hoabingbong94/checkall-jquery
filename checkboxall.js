<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<div class="checked">
		<input type="checkbox" name="all" id="checkAll"> Check All
		<br/>
		<input type="checkbox" class="single" name="an"> Ăn
		<input type="checkbox" class="single" name="uong"> Uống
		<input type="checkbox" class="single" name="choi"> Chơi
	</div>
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"
	  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	  crossorigin="anonymous"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			var checkedArray = [];

			$('#checkAll').on('change', function() {
				var nameAll = $(this).attr('name');
				checkedArray = [];
				if ($(this).is(":checked")) {
					//checked all
					$(this).prop('checked', true);
					checkedArray.push(nameAll);

					//checked single
					$('input.single').each(function() {
						var name = $(this).attr('name');
						$(this).prop('checked', 'true');
						checkedArray.push(name);
					});
				} else {
					// un checked all
					$(this).prop('checked', false);
					$('input.single').prop('checked', false);
					checkedArray = [];
				}
				// console.log(checkedArray);
			});

			$('input.single').on('change', function () {
				var name = $(this).attr('name');
				let nameAll = $("#checkAll").attr('name');
				// console.log(name);
				if ($(this).is(":checked")) {
					checkedArray.push(name);
					$(this).prop('checked', true);
				} else {
					checkedArray.splice($.inArray(name, checkedArray), 1);
					$(this).prop('checked', false);

					//uncheck all
					if(jQuery.inArray(name, checkedArray) == -1) {
						$('#checkAll').prop('checked', false);
						var indexOf = checkedArray.indexOf(nameAll);
						if(indexOf != -1) {
							checkedArray.splice(indexOf, 1);
						}
					}
				}
				if ($('input.single:checked').length == $('input.single').length) {
					checkedArray.push(nameAll);
					$('#checkAll').prop('checked', true);
				}
				
				console.log(checkedArray);
			});
		});
	</script>
</body>
</html>
