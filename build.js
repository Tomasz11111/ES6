'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch(props) {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

		_this.state = {
			running: false,
			display: '00:00:00',
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}

		};
		_this.handleReset = _this.handleReset.bind(_this);
		_this.start = _this.start.bind(_this);
		_this.print = _this.print.bind(_this);
		_this.format = _this.format.bind(_this);
		_this.step = _this.step.bind(_this);
		_this.calculate = _this.calculate.bind(_this);
		return _this;
	}

	_createClass(Stopwatch, [{
		key: 'handleReset',
		value: function handleReset() {
			this.setState({
				times: {
					minutes: 0,
					seconds: 0,
					miliseconds: 0
				}
			});
			this.stop();
			this.print();
		}
	}, {
		key: 'print',
		value: function print() {
			var display = this.format(this.times);
			this.setState({ display: display });
		}
	}, {
		key: 'format',
		value: function format(times) {
			function pad0(value) {
				var result = value.toString();
				if (result.length < 2) {
					result = '0' + result;
				}
				return result;
			}
			return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: 'start',
		value: function start() {
			var _this2 = this;

			this.setState({ running: true });
			this.watch = setInterval(function () {
				return _this2.step();
			}, 10);
		}
	}, {
		key: 'step',
		value: function step() {
			if (!this.running) return;
			this.calculate();
			this.print();
		}
	}, {
		key: 'calculate',
		value: function calculate() {
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
	}, {
		key: 'stop',
		value: function stop() {
			this.setState({ running: false });
			clearInterval(this.watch);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'stoper' },
				React.createElement(
					'a',
					{ href: '#', id: 'start', className: 'button', onClick: this.start },
					'Start'
				),
				React.createElement(
					'a',
					{ href: '#', id: 'stop', className: 'button', onClick: this.stop },
					'Stop'
				),
				React.createElement(
					'a',
					{ href: '#', id: 'reset', className: 'button', onClick: this.handleReset },
					'Reset'
				),
				React.createElement(
					'p',
					null,
					' ',
					this.state.display
				)
			)

			/*<div className={stopwatch}>
   	this.props.display</div>*/

			;
		}
	}]);

	return Stopwatch;
}(React.Component);

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
