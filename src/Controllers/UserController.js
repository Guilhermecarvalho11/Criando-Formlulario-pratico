class UserController {
    contructor(formId){
        this.form = document.getElementById(formId);
        this.onSubmit();
        console.log("chegou aqui")
    }

    onSubmit(){
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.getValues();
        })
    }

    getValues(){
        let user = {};
        [...this.form.elements].forEach((element, index) => {

            if(element.name){
                user[element.name] = element.value;
            }
        })
        console.log(user)

    }
}