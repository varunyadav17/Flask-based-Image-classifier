$(document).ready(function () {

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (e) {
                $('#uploadPreview').fadeIn(650);
		document.getElementById('uploadPreview').src = e.target.result;
            }
        }
    }
    $("#imageUpload").change(function () {
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('#result').fadeIn(600);
                $('#result').text('Result: ' + data);
                console.log('Success!');
            },
        });
    });

});

