<!DOCTYPE html>
<html lang="en">
<head>
	<?PHP include 'header.php'; ?>

</head>
<body>

    <div class="container-fluid">

            <div class="col-sm-12">
                <div class="masonry masonry-columns-7" id="coverplace">

                    
                </div>
            </div>
    </div>

	<footer>
		<?PHP include 'footer.php'; ?>
	</footer>
</body>

<!-- Confirm send to reader -->
<div id="confirmsendbook" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Send book to reader</h4>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-success" id="confirmsend" data-dismiss="modal">Send</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>


</html>
