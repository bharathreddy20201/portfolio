const validation= (values) =>{
    let errors={};

    if(!values.user_name){
        errors.user_name="Name is required."
    }
    if(!values.user_email){
        errors.user_email="Email is required."
    }
    else if(!/\S+@\S+\.\S+/.test(values.user_email)){
        errors.user_email="Email is invalid."

    }
    if(!values.message){
        errors.message="message is required."
    }
    else if(values.message.length<8){
        errors.message="message must be more than 8 characters"
    }


    



      
   




    return errors;
};

export default validation;