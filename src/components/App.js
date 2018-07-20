import React from 'react';
import Message from './Message';
import Formulaire from './Formulaire';

class App extends React.Component {
	state = {
		messages: {

		}
	}
	addMessage = message => {
		//copier le state 
		//les trois petits point permettent de recuperer ce qui y a ds le state 
		const messages = {...this.state.messages}
		//on ajoute le message avec une clé timestamp
		const timestamp = Date.now()
		console.log(timestamp)
		messages[`message-${timestamp}`] = message
		//Mettre a jour le state
		this.setState({ messages })
	}
	render() {
		return (
			<div className="box">
				<div>
					<div className="messages" >
						<Message pseudo={this.props.params.pseudo}/>
					</div>
					<Formulaire addMessage={this.addMessage}/>
				</div>
			</div>
		)
	}
}

export default App;