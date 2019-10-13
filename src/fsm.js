class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (!config) {throw new Error('Error');}
        this.initial = config.initial;
        this.states = config.states;
        this.stateNow = config.initial;
        this.history = [];
    }
        
    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.stateNow;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
       
        let stateValue = Object.keys(this.states);
        for(var i = 0; i<stateVal.length; i++) {
            if (stateValue[i] != state) {throw new Error('Error');}
        }
        this.stateNow = state;
        
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.active = this.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {
        this.active = 'normal';
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
