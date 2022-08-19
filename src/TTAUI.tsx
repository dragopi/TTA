import React from "react";
import {TTARepoCards} from "./TTARepo"
import { TTACard, TTASceneValues, TTAStrengthValue } from "./TTATypes";
import { TacticSVG } from "./TTAUITactic";
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

export class CardItemToken extends React.Component<CardItemProps, CardItemState> {
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

    IncrementItem = () => {
        this.setState({ tokens: this.state.tokens + 1 });
        this.setState({ onBoard: (this.state.tokens>0) });
    };
    DecreaseItem = (e: React.FormEvent<HTMLButtonElement>) => {
        this.setState({ tokens: this.state.tokens - 1 });
        this.setState({ onBoard: (this.state.tokens>0) });
    };

    render() {

        return (
            <FormContext.Consumer>
            {(context: IFormContext) => (

            <div className="crdtkn">
                <div className={`crdtkn-header ${this.state.onBoard ? "onboard" : ""}`}>
                    
                    <span className="tknval">{ this.state.tokens }</span>

                    <input type="hidden" name={this.state.card.code}  />
                    <input type="hidden" name={this.state.card.code + "_tk"}  value={this.state.tokens} />

                    <span className="me-auto">{this.state.card.name}</span>
                    
                    {this.state.showToken && (
                        <div>
                            <a href="#" className="" id={this.state.card.code + "_add"} onClick={
                                (e: React.FormEvent<HTMLAnchorElement>) => {
                                    let value = this.state.tokens + 1;
                                    if (value>=0) {

                                            if (context!=null)
                                                context.setValues({ 
                                                    [this.state.card.code + "_tk"]: value,
                                                    [this.state.card.code]: (value)?"on":"off"
                                                });
                                            
                                            this.setState({ tokens: value });
                                            this.setState({ onBoard: (value>0) });
                                        }
                                    }}><i className="bi bi-file-plus"></i></a>
                            
                            <a href="#" className="" id={this.state.card.code + "_rmv"} onClick={
                                    (e: React.FormEvent<HTMLAnchorElement>) => {
                                        let value = this.state.tokens - 1;
                                        if (value>=0) {
                                            if (context!=null)
                                                context.setValues({ 
                                                    [this.state.card.code + "_tk"]: value,
                                                    [this.state.card.code]: (value)?"on":"off"
                                                });
                                            this.setState({ tokens: value });
                                            this.setState({ onBoard: (value>0) });
                                        }
                                    }}><i className="bi bi-file-minus"></i></a>
                        </div>
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

    render() {

        var leaders = TTARepoCards.Instance.GetLeaders();
        var indents = [];
        for (var i = 0; i < leaders.length; i++) {
            var leader = leaders[i];
            //indents.push(<CardItem code={leader.code} />);
            indents.push(<option value={leader.code}>{leader.name}</option>);
        }

        return (
            <div className="crdtkn">
                <div className="crdtkn-header">
                    <strong className="me-auto">Leader</strong>
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
            <div className="crdtkn">
                <div className="crdtkn-header">
                    <strong className="me-auto">Tactic</strong>
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
            <div className="crdtkn">
                <div className="crdtkn-header">
                    <strong className="me-auto">Governament</strong>
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
                </div>
            </div>    
        );
    }
}


function GetYellowTokenBar(n: number, h: number)
{
    let svg : string = "";
    svg +=  '<svg viewBox="0 0 500 90" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"><defs>';
    svg +=  '<filter id="drop-shadow-filter-0" x="-500%" y="-500%" width="1000%" height="1000%" bx:preset="drop-shadow 1 0 0 4 0.5 rgba(0,0,0,0.3)">';
    svg +=  '<feGaussianBlur in="SourceAlpha" stdDeviation="4"></feGaussianBlur><feOffset dx="0" dy="0"></feOffset><feComponentTransfer result="offsetblur">';
    svg +=  '<feFuncA id="spread-ctrl" type="linear" slope="1"></feFuncA></feComponentTransfer><feFlood flood-color="rgba(0,0,0,0.3)"></feFlood>';
    svg +=  '<feComposite in2="offsetblur" operator="in"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>';
    svg +=  '<linearGradient gradientUnits="userSpaceOnUse" x1="10" y1="0" x2="10" y2="20" id="gradient-0" gradientTransform="matrix(0, -0.974845, 0.974845, 0, -0.047753, 19.917264)"><stop offset="0" style="stop-color: rgb(255, 242, 0);"></stop><stop offset="1" style="stop-color: rgb(255, 204, 0);"></stop></linearGradient>';
    svg +=  '</defs><g><rect width="58" height="58" style="fill: rgb(216, 216, 216);"></rect>';
    if (n>0)
        svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="16" r="10"></circle>';
    if (n>1)
        svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="42" r="10"></circle>';
    if (n>2)
        svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="16" r="10"></circle>';
    if (n>3)
        svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="42" r="10"></circle>';
  
    svg +=  '</g><g transform="matrix(1, 0, 0, 1, 62, 0)"><rect width="58" height="58" style="fill: rgb(216, 216, 216);"></rect>';
    if (n>4)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="16" r="10"></circle>';
    if (n>5)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="42" r="10"></circle>';
    if (n>6)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="16" r="10"></circle>';
    if (n>7)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="42" r="10"></circle>';
    
    svg +=  '</g><g transform="matrix(1, 0, 0, 1, 124, 0)"><rect width="58" height="58" style="fill: rgb(216, 216, 216);"></rect>';
    if (n>8)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="16" r="10"></circle>';
    if (n>9)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="42" r="10"></circle>';
    if (n>10)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="16" r="10"></circle>';
    if (n>11)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="42" r="10"></circle>';
    
    svg +=  '</g><g transform="matrix(1, 0, 0, 1, 186, 0)"><rect width="58" height="58" style="fill: rgb(216, 216, 216);"></rect>';
    if (n>12)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="16" r="10"></circle>';
    if (n>13)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="42" r="10"></circle>';
    if (n>14)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="16" r="10"></circle>';
    if (n>15)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="42" r="10"></circle>';
    
    svg +=  '</g><g transform="matrix(1, 0, 0, 1,248, 0)"><rect width="58" height="58" style="fill: rgb(216, 216, 216);"></rect>';
    if (n>16)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="16" r="10"></circle>';
    if (n>17)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="16" cy="42" r="10"></circle>';
    if (n>18)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="16" r="10"></circle>';
    if (n>19)
      svg +=  '<circle style="fill: rgb(255, 247, 0); filter: url(#drop-shadow-filter-0);" cx="42" cy="42" r="10"></circle>';
    
    svg +=  '</g>';
    if (h>7) svg += '<g transform="matrix(1, 0, 0, 1, 6, 64)"><rect x="0" y="0" width="20" height="20" style="fill: url(#gradient-0); stroke: rgb(0, 0, 0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    if (h>6) svg += '<g transform="matrix(1, 0, 0, 1, 32, 64)"><rect x="0" y="0" width="20" height="20" style="stroke: rgb(0, 0, 0); fill: url(#gradient-0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    if (h>5) svg += '<g transform="matrix(1, 0, 0, 1, 68, 64)"><rect x="0" y="0" width="20" height="20" style="stroke: rgb(0, 0, 0); fill: url(#gradient-0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    if (h>4) svg += '<g transform="matrix(1, 0, 0, 1, 94, 64)"><rect x="0" y="0" width="20" height="20" style="stroke: rgb(0, 0, 0); fill: url(#gradient-0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    if (h>3) svg += '<g transform="matrix(1, 0, 0, 1, 130, 64)"><rect x="0" y="0" width="20" height="20" style="stroke: rgb(0, 0, 0); fill: url(#gradient-0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    if (h>2) svg += '<g transform="matrix(1, 0, 0, 1, 156, 64)"><rect x="0" y="0" width="20" height="20" style="stroke: rgb(0, 0, 0); fill: url(#gradient-0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    if (h>1) svg += '<g transform="matrix(1, 0, 0, 1, 205, 64)"><rect x="0" y="0" width="20" height="20" style="stroke: rgb(0, 0, 0); fill: url(#gradient-0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    if (h>0) svg += '<g transform="matrix(1, 0, 0, 1, 269, 64)"><rect x="0" y="0" width="20" height="20" style="stroke: rgb(0, 0, 0); fill: url(#gradient-0);" rx="3" ry="3"></rect><ellipse style="" cx="6.5" cy="7" rx="1.22" ry="2.565"></ellipse><ellipse style="stroke-linecap: round;" cx="13.5" cy="7" rx="1.22" ry="2.565"></ellipse><path d="M 4 13 C 6 17, 14 17, 16 13" style="stroke: rgb(0, 0, 0); fill: transparent; stroke-linecap: round;"></path></g>';
    svg +=  '</svg>';
    //return svg;
    
    return (
        <div>
        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} />
        </div>
    );
    
}

export class FilterYellowTokens extends React.Component<FLeadersProps, FLeadersState> {
    state: FLeadersState = {};

    render() {

        return (
            <div className="crdtkn">
                <div className="crdtkn-header">
                    <strong className="me-auto">YellowTokens</strong>
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

        let defClass: string = "list-group-item list-group-item-action flex-column align-items-start";

        if (!this.state.values.valid)
            defClass = defClass + " list-group-item-danger";

        let imgSvg = GetYellowTokenBar(this.state.values.yellowToken,this.state.values.happy.Value());
        return (
            <div className="list-group">
                <a href="#" className={(this.state.values.strength.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
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
                <a href="#" className={(this.state.values.culture.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
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
                <a href="#" className={(this.state.values.food.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
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
                <a href="#" className={(this.state.values.resource.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Resource</h5>
                        <strong>{this.state.values.resource.Value()}</strong>
                    </div>
                    <small className="text-muted">
                        {this.state.values.resource.Logs().map((item, i) => {      
                            return (<span>{item.msg}<br /></span>) 
                        })}
                    </small>
                </a>
                <a href="#" className={(this.state.values.science.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
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
                <a href="#" className={(this.state.values.happy.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
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
                <a href="#" className={(this.state.values.ca.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
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
                <a href="#" className={(this.state.values.ma.Logs().length>0) ? defClass : defClass+" valNotChanged"}>
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
                {imgSvg}   
            </div> 
        );
    }
};

type TTAStrengthValuesProps =  {
}

type TTAStrengthValuesState = {
    values: TTAStrengthValue;
}

export class TacticResult extends React.Component<TTASceneValuesProps, TTASceneValuesState> {
    state: TTASceneValuesState = {
        values: new TTASceneValues()
    };


    Title() {
        if (this.state.values.strength.tacticReport.TacticCard != null)
            return (<h6>{this.state.values.strength.tacticReport.TacticCard.name}</h6>);
        else
            return (<h6></h6>);
    };

    TacticImage() {
        if (this.state.values.strength.tacticReport.TacticCard != null)
        {
            let tacticSVG = new TacticSVG();
            let svg = tacticSVG.GetImageSVG(this.state.values.strength.tacticReport.TacticCard, 40);
            return (<div>
                        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} height="40" />
                    </div>);
        }
        else
            return (<div></div>);
    }

    Report() {
        
        let tacticSVG = new TacticSVG();
        return tacticSVG.GetTableReport(this.state.values.strength.tacticReport);
        
    }

    render() {
        return(
            <div>
                {this.Title()}
                {this.Report()}
            </div>
        );
    }
};
