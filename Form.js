import { useState } from 'react';
import './Form.css'
function Form() {

	const [companyname, setCompanyName] = useState('');
	const [ownername, setOwnerName] = useState('');
	const [email, setEmail] = useState('');
	const [rollno, setRollNo] = useState('');
	const [accesscode, setAccessCode] = useState('');

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleCompanyName = (e) => {
		setCompanyName(e.target.value);
		setSubmitted(false);
	};

	const handleOwnerName = (e) => {
		setOwnerName(e.target.value);
		setSubmitted(false);
	};
	
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	const handleRollNo = (e) => {
		setRollNo(e.target.value);
		setSubmitted(false);
	};

	const handleAccessCode = (e) => {
		setAccessCode(e.target.value);
		setSubmitted(false);	
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (companyname === '' || ownername === '' || email === '' || rollno === '' || accesscode === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};


	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h1>User {companyname} successfully registered!!</h1>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};

	return (
		<div className="form">
			<div>
				<h1>Sign Up</h1>
			</div>
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				<label className="label"> Company Name</label>
				<input onChange={handleCompanyName} className="input"
					value={companyname} type="text" /><br></br>

				<label className="label"> Owner Name</label>
				<input onChange={handleOwnerName} className="input"
					value={ownername} type="text" /><br></br>

				<label className="label">Email</label>
				<input onChange={handleEmail} className="input"
					value={email} type="email" /><br></br>

				<label className="label">RollNo</label>
				<input onChange={handleRollNo} className="input"
					value={rollno} type="password" /><br></br>

				<label className="label"> Access Code</label>
				<input onChange={handleAccessCode} className="input"
					value={accesscode} type="text" /><br></br>

				<button onClick={handleSubmit} className="btn"
					type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
export default Form