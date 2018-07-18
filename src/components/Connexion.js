import React from 'react';

class Connexion extends React.Component {

	goTOChat = e =>{
		e.preventDefault();
		console.log(this.pseudoInput.value)
	}
	render() {
		return (
			<div className="connexionBox" onSubmit={e => this.goTOChat(e)}>
				<form className="connexion" >
					<input 
						type="text"
						placeholder="Pseudo" 
						required
						ref={input => this.pseudoInput = input} 
					/>
					<button 
						type="submit">GO
					</button>
				</form>
			</div>
		)
	}
}



export default Connexion;