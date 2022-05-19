import { useState } from 'react';

export const Form = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ phoneType, setPhoneType ] = useState('');
    const [ staff, setStaff ] = useState();
    const [ bio, setBio ] = useState('');
    const [ signup, setSignup ] = useState(false);
    

    const validations = (e) => {
        e.preventdefault();
        let validate = {
            name,
            email,
            phoneNumber,
            phoneType,
            staff,
            bio,
            signup
        }
        const errors = [

        ]
    }


    return (
        <div>
            <form onSubmit={()=>{}}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id='name' type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input id='phone-number' type='tel' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="phone-type">Phone Type:</label>
                    <select id='phone-type' value={phoneType} onChange={(e)=>setPhoneType(e.target.value)}>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <p>Staff:</p>
                    <input id='instructor' type='radio' name='staff' value='instructor' checked={staff === 'instructor'} onClick={()=>setStaff('instructor')}></input>
                    <label htmlFor="instructor">Instructor</label>
                    <input id='student' type='radio' name='staff' value='student' checked={staff === 'student'} onClick={()=>setStaff('student')}></input>
                    <label htmlFor="student">Student</label>
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id='bio' value={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <input id='signup' type='checkbox' value={signup} onChange={(e)=>setSignup(!signup)}></input>
                    <label htmlFor="signup">Would you like to receive our newsletter?!</label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
