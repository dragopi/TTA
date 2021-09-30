import React from "react";
import {TTACard, TTARepoCards} from "./TTARepo"
import {
    IErrors,
    IFormContext,
    FormContext,
  } from "./Forms";

type CardItemProps =  {
    code: string;
}

type CardItemState = {
    card: TTACard;
    onBoard: boolean;
    needToken: boolean;
    tokens: number;
}

export class CardItem extends React.Component<CardItemProps, CardItemState> {
    state: CardItemState = {
        // optional second annotation for better type inference
        card: TTARepoCards.Instance.Get(this.props.code),
        onBoard: false,
        tokens: 0,
        needToken: false
    };

    buttonClick = (e: React.FormEvent<HTMLButtonElement>): void => {
        if (this.state.onBoard)
            this.setState({ onBoard: false });
        else
            this.setState({ onBoard: true });
      };

    cardClick = (): void => {
        console.log('card click');
    }

    render() {

        return (
            <FormContext.Consumer>
            {(context: IFormContext) => (

            <div className="crdtkn">
                <div className="crdtkn-header">
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name={this.state.card.code} onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [this.state.card.code]: e.currentTarget.value })
              } />
                    </div>

                    <strong className="me-auto">{this.state.card.name}</strong>
                    <small>

                        <select name={this.state.card.code + "_tk"}
                            onChange={
                            (e: React.FormEvent<HTMLSelectElement>) =>
                            context.setValues({ [this.state.card.code + "_tk"]: e.currentTarget.value })
                            }
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>

                    </small>
                </div>
                
            </div>
            )}
            </FormContext.Consumer>
        );
    }
}

export class CardWithToken extends React.Component<CardItemProps, CardItemState> {
    state: CardItemState = {
        // optional second annotation for better type inference
        card: TTARepoCards.Instance.Get(this.props.code),
        onBoard: false,
        tokens: 0,
        needToken: false,
    };

    render() {

        return (
            <FormContext.Consumer>
            {(context: IFormContext) => (

            <div className="crdtkn">
                <div className="crdtkn-header">
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name={this.state.card.code} onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [this.state.card.code + "_ob"]: e.currentTarget.value })
              } />
                    </div>

                    <strong className="me-auto">{this.state.card.name}</strong>
                    <small>{this.state.card.type}</small>
                </div>
                <div className="crdtkn-body">


                    <div className="qty mt-5">
                        <span className="minus bg-dark" onClick={
                            () => {
                                let value = this.state.tokens - 1;
                                if (value<0)
                                    value = 0;
                                this.setState({tokens: value});
                                context.setValues({ [this.state.card.code + "_tk"]: value });
                            }
                        }>-</span>
                        <input type="number" className="count" name={this.state.card.code + "_tk"} value={this.state.tokens} onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [this.state.card.code + "_tk"]: e.currentTarget.value })
              } />
                        <span className="plus bg-dark" onClick={
                            () => {
                                let value = this.state.tokens;
                                value = value+1
                                this.setState({tokens: value});
                                context.setValues({ [this.state.card.code + "_tk"]: value });
                            }
                        }>+</span>
                    </div>
                </div>
            </div>
            )}
            </FormContext.Consumer>
        );
    }
}

type FLeadersProps =  {
    //code: string;
}

type FLeadersState = {
    //card: TTACard;
    //onBoard: boolean;
    //needToken: boolean;
    //tokens: number;
}


export class FilterLeaders extends React.Component<FLeadersProps, FLeadersState> {
    state: FLeadersState = {};

    cardClick = (): void => {
        console.log('card click');
    }

    render() {

        var leaders = TTARepoCards.Instance.GetLeaders();
        var indents = [];
        for (var i = 0; i < leaders.length; i++) {
            var leader = leaders[i];
            //indents.push(<CardItem code={leader.code} />);
            indents.push(<option value={leader.code}>{leader.name}</option>);
        }

        return (
            <div className="card">
                <div className="card-header">
                    Leader
                </div>
                <div className="card-body">
                    <FormContext.Consumer>
                    {(context: IFormContext) => (
                        <select name="leader"                        
                            onChange={
                            (e: React.FormEvent<HTMLSelectElement>) =>
                            context.setValues({ ["leader"]: e.currentTarget.value })
                            }
                        >
                            <option value="">No one </option>
                        {indents}
                        </select>
                    )}
                    </FormContext.Consumer>
                </div>
            </div>           
        );
    }
}


export class FilterTactics extends React.Component<FLeadersProps, FLeadersState> {
    state: FLeadersState = {};

    render() {

        var tactics = TTARepoCards.Instance.GetTactics();
        var indents = [];
        for (var i = 0; i < tactics.length; i++) {
            var tactic = tactics[i];
            //indents.push(<CardItem code={leader.code} />);
            indents.push(<option value={tactic.code}>{tactic.name}</option>);
        }

        return (
            <div className="card">
                <div className="card-header">
                    Tactic
                </div>
                <div className="card-body">
                    <FormContext.Consumer>
                    {(context: IFormContext) => (
                        <select name="tactic"                        
                            onChange={
                            (e: React.FormEvent<HTMLSelectElement>) =>
                            context.setValues({ ["tactic"]: e.currentTarget.value })
                            }
                        >
                            <option value="">No one </option>
                        {indents}
                        </select>
                    )}
                    </FormContext.Consumer>
                </div>
            </div>           
        );
    }
}

export class FilterWonder extends React.Component<FLeadersProps, FLeadersState> {
    state: FLeadersState = {};

    cardClick = (): void => {
        console.log('card click');
    }

    render() {

        var wonders = TTARepoCards.Instance.GetWonders(0);
        var wonders0 = [];
        for (var i = 0; i < wonders.length; i++) 
            wonders0.push(<option value={wonders[i].code}>{wonders[i].name}</option>);

        wonders = TTARepoCards.Instance.GetWonders(1);
        var wonders1 = [];
        for (var i = 0; i < wonders.length; i++) 
            wonders1.push(<option value={wonders[i].code}>{wonders[i].name}</option>);
        
        wonders = TTARepoCards.Instance.GetWonders(2);
        var wonders2 = [];
        for (var i = 0; i < wonders.length; i++) 
            wonders2.push(<option value={wonders[i].code}>{wonders[i].name}</option>);

        wonders = TTARepoCards.Instance.GetWonders(3);
        var wonders3 = [];
        for (var i = 0; i < wonders.length; i++) 
            wonders3.push(<option value={wonders[i].code}>{wonders[i].name}</option>);

        return (
            <div>
                    <h6>Wonders</h6>
                    <FormContext.Consumer>
                    {(context: IFormContext) => (

                        
                            <div>
                                <div className="crdtkn">
                                    <div className="crdtkn-header">
                                        <strong className="me-auto">A</strong>
                                        <select name="wonder0"                        
                                            onChange={
                                            (e: React.FormEvent<HTMLSelectElement>) =>
                                            context.setValues({ ["wonder0"]: e.currentTarget.value })
                                            }
                                        >
                                            <option value="">No one </option>
                                        {wonders0}
                                        </select>
                                    </div>
                                </div>
                                <div className="crdtkn">
                                    <div className="crdtkn-header">
                                        <strong className="me-auto">I</strong>
                                        <select name="wonder1"
                                            onChange={
                                            (e: React.FormEvent<HTMLSelectElement>) =>
                                            context.setValues({ ["wonder1"]: e.currentTarget.value })
                                            }
                                        >
                                            <option value="">No one </option>
                                        {wonders1}
                                        </select>
                                    </div>
                                </div>
                                <div className="crdtkn">
                                    <div className="crdtkn-header">
                                        <strong className="me-auto">II</strong>
                                        <select name="wonder2"
                                            onChange={
                                            (e: React.FormEvent<HTMLSelectElement>) =>
                                            context.setValues({ ["wonder2"]: e.currentTarget.value })
                                            }
                                        >
                                            <option value="">No one </option>
                                        {wonders2}
                                        </select>
                                    </div>
                                </div>
                                <div className="crdtkn">
                                    <div className="crdtkn-header">
                                        <strong className="me-auto">III</strong>
                                        <select name="wonder3"
                                            onChange={
                                            (e: React.FormEvent<HTMLSelectElement>) =>
                                            context.setValues({ ["wonder3"]: e.currentTarget.value })
                                            }
                                        >
                                            <option value="">No one </option>
                                        {wonders3}
                                        </select>
                                    </div>
                                </div>
                            </div>
                    )}
                    </FormContext.Consumer>
            </div>           
        );
    }
}

export class FilterAge extends React.Component<FLeadersProps, FLeadersState> {
    state: FLeadersState = {};

    render() {

        return (
            
                <FormContext.Consumer>
                    {(context: IFormContext) => (
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="age" onClick={
                                        (e: React.FormEvent<HTMLInputElement>) =>
                                            context.setValues({ ["age"]: 0 })
                                        } />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Age A
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="age" onClick={
                                        (e: React.FormEvent<HTMLInputElement>) =>
                                            context.setValues({ ["age"]: 1 })
                                        } />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Age I
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="age" onClick={
                                        (e: React.FormEvent<HTMLInputElement>) =>
                                            context.setValues({ ["age"]: 2 })
                                        } />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Age II
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="age" onClick={
                                        (e: React.FormEvent<HTMLInputElement>) =>
                                            context.setValues({ ["age"]: 3 })
                                        } />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Age III
                                </label>
                            </div>
                        </div>
                )}
                </FormContext.Consumer>
                     
        );
    }
}


type FilterCategoryProps =  {
    descr: string;

    render: () => React.ReactNode;
}

type FilterCategoryState = {
    //card: TTACard;
    //onBoard: boolean;
    //needToken: boolean;
    //tokens: number;
}


export class FilterCategory extends React.Component<FilterCategoryProps, FilterCategoryState> {
    state: FLeadersState = {};

    render() {

        return (
            <div className="card">
                <div className="card-header">
                    {this.props.descr}
                </div>
                <div className="card-body d-flex">
                    {this.props.render()}
                </div>
            </div>           
        );
    }
}

/*
            <div className="toast">
                <div className="toast-header">
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>

                    <strong className="me-auto">{this.state.card.name}</strong>
                    <small>{this.state.card.type}</small>
                </div>
                <div className="toast-body">
                
                    <button type="button" className={this.state.onBoard ? 'btn btn-primary position-relative' : 'btn btn-outline-primary position-relative'} onClick={this.buttonClick}>    
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {this.state.tokens}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>

                </div>
            </div>
*/