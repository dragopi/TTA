import React from "react";
import {TTARepoCards} from "./TTARepo"
import { TTACard, TTASceneValues } from "./TTATypes";
import {
    IErrors,
    IFormContext,
    FormContext,
  } from "./Forms";


type CardItemProps =  {
    code: string;
    needToken?: boolean;
}

type CardItemState = {
    card: TTACard;
    onBoard: boolean;
    showToken: boolean;
    tokens: number;
}

export class CardItem extends React.Component<CardItemProps, CardItemState> {
    state: CardItemState = {
        // optional second annotation for better type inference
        card: TTARepoCards.Instance.Get(this.props.code),
        onBoard: false,
        tokens: 0,
        showToken: (this.props.needToken !== false)
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
                (e: React.FormEvent<HTMLInputElement>) => {
                    if (e.currentTarget.checked)
                        context.setValues({ [this.state.card.code]: e.currentTarget.value });
                    else
                        context.setValues({ [this.state.card.code]: 'off' });
                }
              } />
                    </div>

                    <strong className="me-auto">{this.state.card.name}</strong>
                    {this.state.showToken && (
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
                        </select>

                    </small>
                    )}
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

export class FilterGovernament extends React.Component<FLeadersProps, FLeadersState> {
    state: FLeadersState = {};

    render() {

        var governaments = TTARepoCards.Instance.GetGovernaments();
        var indents = [];
        for (var i = 0; i < governaments.length; i++) {
            var gov = governaments[i];
            //indents.push(<CardItem code={leader.code} />);
            indents.push(<option value={gov.code}>{gov.name}</option>);
        }

        return (
            <div className="card">
                <div className="card-header">
                    Governament
                </div>
                <div className="card-body">
                    <FormContext.Consumer>
                    {(context: IFormContext) => (
                        <select name="leader"                        
                            onChange={
                            (e: React.FormEvent<HTMLSelectElement>) =>
                            context.setValues({ ["governament"]: e.currentTarget.value })
                            }
                        >
                        {indents}
                        </select>
                    )}
                    </FormContext.Consumer>
                    <FormContext.Consumer>
                    {(context: IFormContext) => (
                        <select name="tokens"                        
                        onChange={
                        (e: React.FormEvent<HTMLSelectElement>) =>
                        context.setValues({ ["tokens"]: e.currentTarget.value })
                        }
                    >
                        <option>20</option>
                        <option>19</option>
                        <option>18</option>
                        <option>17</option>
                        <option>16</option>
                        <option>15</option>
                        <option>14</option>
                        <option>13</option>
                        <option>12</option>
                        <option>11</option>
                        <option>10</option>
                        <option>9</option>
                        <option>8</option>
                        <option>7</option>
                        <option>6</option>
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                        <option>0</option>
                    </select>
                    )}
                    </FormContext.Consumer>
                </div>
            </div>           
        );
    }
}

type TTASceneValuesProps =  {
}

type TTASceneValuesState = {
    values: TTASceneValues;
}

export class SceneResult extends React.Component<TTASceneValuesProps, TTASceneValuesState> {
    state: TTASceneValuesState = {
        values: new TTASceneValues()
    };

    render() {

        return (
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Strength</h5>
                        <strong>{this.state.values.strength.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.strength.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Culture</h5>
                        <strong>{this.state.values.culture.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.culture.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Food</h5>
                        <strong>{this.state.values.food.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.food.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Rock</h5>
                        <strong>{this.state.values.resource.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.resource.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Science</h5>
                        <strong>{this.state.values.science.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.science.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Happy</h5>
                        <strong>{this.state.values.happy.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.happy.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Civ action</h5>
                        <strong>{this.state.values.ca.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.ca.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Mil actions</h5>
                        <strong>{this.state.values.ma.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.ma.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
            </div>    
        );
    }
}
