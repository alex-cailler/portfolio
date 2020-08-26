import React from "react";
import {Input, Textarea} from "../../form-object";
import {Button} from "../../button";

const FormContact = ({}) => {
    return (
        <form>
            <Input placeholder="nom" className="mt-5"/>
            <Input placeholder="email" className="mt-5"/>
            <Textarea placeholder="message" className="mt-5"/>
            <Button className="mt-5">Envoyer</Button>
        </form>
    )
}

export default FormContact
