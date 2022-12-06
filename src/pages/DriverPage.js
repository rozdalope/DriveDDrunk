import React from 'react'

const DriverPage = () => {

    const [editable, setEditable] = useState(false);
    const [buttonText, setButtonText] = useState('Edit');

    const { driver } = props;
    const { register, handleSubmit, setValue, errors } = useForm({
        defaultValues: {
            firstName: driver.driver.firstName,
            lastName: driver.driver.lastName,
            phoneNumber: driver.driver.phoneNumber,
            email: driver.driver.email,
            password: driver.driver.password,
            birthDate: driver.driver.birthDate,
            longitude: driver.driver.longitude,
            latitude: driver.driver.latitude
        }
    });

    const onSubmit = (data) => {
        const { actions } = props;
        data.email = driver.driver.email;
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
        register('latitude', { required: true });
        register('longitude', { required: true });
        register('birthDate', { required: true });

    }, [register]);

    return (
        <div className='driver-profile-container'>
            {data.map((items) => {
                <div className='driver-profile'></div>
            })}
        </div>
    );
}

export default DriverPage;