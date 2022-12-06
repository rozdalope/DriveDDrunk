import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import PagesHeader from '../components/PagesHeader';


const ProfilePage = (props) => {

    const [editable, setEditable] = useState(false);
    const [buttonText, setButtonText] = useState('Edit');

    const { owner } = props;
    const { register, handleSubmit, setValue, errors } = useForm({
        defaultValues: {
            firstName: owner.owner.firstName,
            lastName: owner.owner.lastName,
            phoneNumber: owner.owner.phoneNumber,
            email: owner.owner.email,
            password: owner.owner.password,
            birthDate: owner.owner.birthDate,
            address: owner.owner.address,
        }
    });

    const onSubmit = (data) => {
        const { actions } = props;
        data.email = owner.owner.email;
        actions.updateOwner(data)
            .then(response => {
                handleEdit()
            })
            .catch(error => console.log(error))
    };

    // use in editting the profile
    const handleEdit = () => {
        editable ? setButtonText('Edit') : setButtonText('Cancel');
        setEditable(!editable);
    };

    const handleLogout = () => {
        const { actions } = props;
        alert(
            'Are you sure you want to log out?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Log out', onclick: () => actions.logoutOwner() },
            ],
            { cancelable: true }
        );
    };

    useEffect(() => {
        register('firstName', { required: true });
        register('lastName', { required: true });
        register('phoneNumber', { required: true, maxLength: 11 });
        register('email', { required: true });
        register('password', { required: true });
        register('address', { required: true });
        register('birthDate', { required: true });

    }, [register]);

    return (
        <>
            <PagesHeader />
            <div className='owner-profile-container'>
                <div className='owner-profile'>
                    <h1></h1>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;