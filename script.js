class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			display: '00:00:00',
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
			
		};
		this.handleReset = this.handleReset.bind(this);
		this.start = this.start.bind(this);
		this.print = this.print.bind(this);
		this.format = this.format.bind(this);
		this.step = this.step.bind(this);
		this.calculate = this.calculate.bind(this);
	}
		
				
	
	handleReset() {
        this.setState( {
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
        	}
		});
		this.stop()
		this.print()
		
		
    }
	
	print() {
        let display = this.format(this.times);
		this.setState({display: display});
		
	}
	
	
	format(times) {
		function pad0(value) {
			let result = value.toString();
				if (result.length < 2) {
					result = '0' + result;
				}
				return result;
		}
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	
	}
	
	start() {
		
			this.setState( {running: true});
			this.watch = setInterval(() => this.step(), 10);
		
	}
	step() {
		if (!this.running) return;
		this.calculate();
		this.print();
	}

	calculate() {
		this.times.miliseconds += 1;
		if (this.times.miliseconds >= 100) {
			this.times.seconds += 1;
			this.times.miliseconds = 0;
		}
		if (this.times.seconds >= 60) {
			this.times.minutes += 1;
			this.times.seconds = 0;
		}
	}

	stop() {
		this.setState({running: false})
		clearInterval(this.watch);
		
		
	}
	render() {
		return (
			<div className='stoper'>
				
				<a href='#' id='start' className='button' onClick={this.start}>Start</a>
				<a href='#' id='stop' className='button' onClick={this.stop}>Stop</a>
				<a href='#' id='reset' className='button' onClick={this.handleReset}>Reset</a>
				<p> {this.state.display}</p>				  
			</div>
				
				
				/*<div className={stopwatch}>
					this.props.display</div>*/
			
			);
			
		
	}
	
}

var app = React.createElement(Stopwatch);
ReactDOM.render(app, document.getElementById('app'));

/*const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () =>stopwatch.reset());*/