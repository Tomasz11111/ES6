class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			users: []
		};
	}
	
	onChangeHandle(event) {
		this.setState({searchText: event.target.value});
	}
	
	onSubmit(event) {
		event.preventDefault();
		const {searchText} = this.state;
		const url = `https://api.github.com/search/users?q=${searchText}`;
		fetch(url)
			.then(response => response.json())
			.then(responseJson => this.setState({users: responseJson.items}));
	}
	
	render() {
		return (
			<div style={{paddingTop: '100px'}}>
				<form onSubmit={event => this.onSubmit(event)}>
					<label htmlFor = 'searchText' style={{fontSize: '20px', display: 'block', textAlign: 'center'}}>Search by user name</label>
					<input  
						type='text'
						id='searchText'
						style={{
							padding: '10px',
							fontSize: '18px',
							display: 'block',
							margin: '0 auto'
						}}
						onChange={event => this.onChangeHandle(event)}
						value={this.state.searchText}/>
				</form>
				<UsersList users={this.state.users}/>
			</div>
		);
	}
}

class UsersList extends React.Component {
	get users() {
		return this.props.users.map(user => <User key={user.id} user={user}/>);
	}
	render() {
			return (
				<div style={{display: 'flex', flexWrap: 'wrap'}}>
					{this.users}
				</div>
			);
		}
}
	
class User extends React.Component {
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingRight: '20px'}}>
				<img src={this.props.user.avatar_url} style={{maxWidth: '200px', display: 'block', paddingTop: '50px'}}/>
				<a href={this.props.user.html_url} target='_blank' style={{display: 'inlineBlock', paddingTop: '20px', fontSize: '20px'}} >{this.props.user.login}</a>
			</div>
		)
	}
}


ReactDOM.render(<App/>, document.getElementById('root')
);

