function checksubmit(){
    var username = document.getElementById("username").value;
    var password= document.getElementById("password").value;
    if(username && password){
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                html: 'Login Successfully'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location="./sign up.html";
            }
        })
    }
};
