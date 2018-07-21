import React from 'react';
import Message from './Message';
import Formulaire from './Formulaire';
import base from '../bdd'

class App extends React.Component {
	state = {
		messages: {
		}
	}
	componentWillMount(){
		this.ref = base.syncState('/', {
			context: this,
			state: 'messages'
		});
	}
	addMessage = message => {
		//copier le state 
		//les trois petits point permettent de recuperer ce qui y a ds le state 
		const messages = {...this.state.messages}
		//on ajoute le message avec une clé timestamp
		const timestamp = Date.now()
		console.log(timestamp)
		messages[`message-${timestamp}`] = message;
		//suppr des msgs si plus de 10 
		Object.keys(messages).splice(0, -10).map(key => messages[key] = null);
		//Mettre a jour le state
		this.setState({ messages })
	}
	render() {
		const messages = Object
			.keys(this.state.messages)
			.map(key => <Message key={ key } details={this.state.messages[key]}/>)
		;

		console.log(messages)
		return (
			<div className="box">
				<div>
					<div className="messages" >
						{messages}
					</div>
					<Formulaire 
						addMessage={this.addMessage} 
						pseudo={this.props.params.pseudo}
						length="140"
					/>
				</div>
			</div>
		)
	}
}

export default App;