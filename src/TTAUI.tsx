import React from "react";
import {TTACard, TTARepoCards} from "./TTARepo"

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
            
        );
    }
}
