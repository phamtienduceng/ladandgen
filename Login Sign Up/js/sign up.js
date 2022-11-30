function checksubmit(){
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirm = document.getElementById("confirm").value;
        var phone = document.getElementById("phone").value;
        if (username && email && password && confirm && phone){
        Swal.fire({
            icon: 'success',
            title: 'Success...',
            html: 'Sign Up Successfully'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location="./login.html";
            }
        })
    }
}
