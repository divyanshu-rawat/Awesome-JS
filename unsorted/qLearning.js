// Q Learning Introduction: https://en.wikipedia.org/wiki/Q-learning
// Algorithm: Q(s,a):=Q(s,a)+α[r+γ*maxQ(s′,a′)−Q(s,a)]

const TERMINAL = 'terminal';
const TOTAL_EPISODE = 10;

function State(stateName, actions) {
	this.name = stateName;
	// Actions of State
	this.actions = {};
	for (let action of actions) {
		this.actions[action] = 0;
	}
}

class QLearning {
  	constructor (actions, learningRate = 0.01, discountFactor = 0.9, eGreedy = 0.9) {
    	this.actions = actions;
    	this.lr = learningRate;
    	this.gamma = discountFactor;
		this.epsilon = eGreedy;
		// Q Table Structure
		this.states = {};
		this.statesList = [];
  	}

	addState (name, actions) {
		const state = new State(name, actions);
		this.states[name] = state;
		this.statesList.push(state);
		return state;
	}

	bestAction (stateActions) {
		return new Promise((resolve, reject)=> {
			let bestAction = null;
			let bestActionReward = null;

			for (let actionName in stateActions) {
				if (!bestActionReward) {
					bestActionReward = stateActions[actionName];
				}
				if (stateActions[actionName] > bestActionReward) {
					bestAction = actionName;
					bestActionReward = stateActions[actionName];
				} else if (stateActions[actionName] === bestActionReward && (Math.random() > 0.5)) {
					bestAction = actionName;
				} else {
					bestAction = bestAction || actionName;
				}
			}
			resolve(bestAction);
		});
	}

	checkStateExist(stateName) {
		if (!this.states[stateName]) this.addState(stateName, this.actions);
	}

	async chooseAction (stateName) {
		this.checkStateExist(stateName);

		console.log('Q Value: ' + JSON.stringify(this.states[stateName].actions));

		let nextAction = null;
		if (Math.random() < this.epsilon) {
			// choose next action based on Q Value
			const stateActions = this.states[stateName].actions;
			nextAction = await this.bestAction(stateActions);
			console.log('pickAction: ' + nextAction);
		} else {
			// choose next action randomly
			nextAction = this.actions[Math.floor(Math.random() * this.actions.length)];
			console.log('randomAction: ' + nextAction);
		}
		return nextAction;
	}

	learn (stateName, actionName, reward, nextStateName) {
		this.checkStateExist(nextStateName);

		const qPredict = this.states[stateName].actions[actionName];

		// γ*maxQ(s′,a′)
		const qTarget = (stateName !== TERMINAL) ? reward + this.gamma * Math.max(...Object.values(this.states[nextStateName].actions))
										   		 : reward;

		this.states[stateName].actions[actionName] += this.lr * (qTarget - qPredict);
	}
}


//
// SAMPLE Command Line Environment
//

class roadEnv {
	constructor () {
		this.totalActions = ['LEFT', 'RIGHT']
		this.resetStateName = '0';
	}
	
	render(stateName) {
		return new Promise((resolve, reject)=> {
			let road = ['-','-','-','-','-','-'];
			road[Number(stateName)] = '0'
			console.log('\n' + road.join(''));
			resolve();
		})
	}

	step(stateName, action) {
		return (({
			'0-LEFT': {
				'nextStateName': TERMINAL,
				'reward': -1000,
				'done': true
			},
			'0-RIGHT': this.normalTransition('1'),
			'1-LEFT': this.normalTransition('0'),
			'1-RIGHT': this.normalTransition('2'),
			'2-LEFT': this.normalTransition('1'),
			'2-RIGHT': this.normalTransition('3'),
			'3-LEFT': this.normalTransition('2'),
			'3-RIGHT': this.normalTransition('4'),
			'4-LEFT': this.normalTransition('3'),
			'4-RIGHT': {
				'nextStateName': TERMINAL,
				'reward': 100,
				'done': true
			}
		})[`${stateName}-${action}`])
	}

	normalTransition(stateName) {
		return {
			'nextStateName': stateName,
			'reward': 0,
			'done': false
		}
	}
}

const update = (env, RL, stateName, totalSteps) => {
	return new Promise((resolve, reject)=>{
		setTimeout(async () => {
			env.render(stateName);
	
			console.log('stateName: ' + stateName);
			const action = await RL.chooseAction(stateName);

			const step = env.step(stateName, action);
			({nextStateName, reward, done} = step);
	
			RL.learn(stateName, action, reward, nextStateName);
			++totalSteps;

			if (!done) {
				stateName = nextStateName;
				resolve(await update(env, RL, stateName, totalSteps));
			} else {
				console.log('endReward: ' + reward);
				resolve(totalSteps);
			}
		}, 100)
	})
}

// Run Q Learning For 10 Episode
const run = async () => {
	const env = new roadEnv();
	const RL = new QLearning(actions = env.totalActions);
	for (let episode = 0; episode < TOTAL_EPISODE; episode++) {
		let stateName = env.resetStateName;
		let totalSteps = 0;
		console.log('\nEpisode: ' + episode + ' =============================== ');
		totalSteps = await update(env, RL, stateName, totalSteps);
		console.log('\nTotalSteps: '+ totalSteps);
	}
}

run();
