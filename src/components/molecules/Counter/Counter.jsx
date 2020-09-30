import React, { Component } from 'react'
import { withStyles, Typography, Paper } from "@material-ui/core";
import { styles } from './styles';
import { ActionButton } from '../..';

class CounterRaw extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            maxValue: 4,
            minValue: 0,
        }
    }

    componentDidMount() {
        this.setState({ counter: this.props.currentCount, maxValue: this.props.max, minValue: this.props.min })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentCount !== this.props.currentCount) {
            this.setState({
                counter: this.props.currentCount
            })
        }
    }

    addItem = () => {
        let currentCounter = this.state.counter
        if (currentCounter < this.state.maxValue) {
            this.props.changeCount(++currentCounter)
            console.log("ITEM ADDED")
        }
    }

    deleteItem = () => {
        let currentCounter = this.state.counter
        if (currentCounter > this.state.minValue) {
            this.props.changeCount(--currentCounter)
            console.log("ITEM DELETED")
        }
    }

    render() {
        const { classes } = this.props;
        const { counter } = this.state;

        return (
            <div className={classes.counterContainer}>
                <Typography>Contador</Typography>
                <Paper elevation={3} >
                    <Typography>{counter}</Typography>
                </ Paper>

                <ActionButton
                    title="-"
                    onClick={() => this.deleteItem()}
                />
                <ActionButton
                    title="+"
                    onClick={() => this.addItem()}
                />
            </div>
        )
    }
}

export const Counter = withStyles(styles)(CounterRaw);
