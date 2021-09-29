import * as React from "react";
import { BoardCard, Scene, StrenghtCalculation } from "./TTACalc";
import { TTACard, TTARepoCards } from "./TTARepo";

export interface IFormContext
  extends IFormState {
  /* Function that allows values in the values state to be set */
  setValues: (values: IValues) => void;
}
/*
 * The context which allows state and functions to be shared with Field.
 * Note that we need to pass createContext a default value which is why undefined is unioned in the type
 */
export const FormContext = React.createContext<IFormContext|undefined>(undefined);

interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;

  render: () => React.ReactNode;
}

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}

export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}

export interface IFormState {
  /* The field values */
  values: IValues;

  /* The field validation error messages */
  errors: IErrors;

  /* Whether the form has been successfully submitted */
  submitSuccess?: boolean;
}


function MakeBoardCard(card: TTACard, values: IValues)
{
  return {
    code: card.code,
    card: card,
    yellowToken: Number((values[card.code+"_tk"])?values[card.code+"_tk"]:0)
  }
}

function CalculateScene(values: IValues)
{
  console.log("CalculateScene: START");

  let s: Scene = {
    Age: 1,
    Leader: null,
    Infantry: [],
    Cavallery: [],
    Artillery: [],
    AirForce: null,
    Wonders: [],
    Urbans: [],
    Tactic: null
  };

  if (values["leader"])
    s.Leader = {
      code: values["leader"],
      yellowToken: 0
    };
  
  if (values["tactic"])
    s.Tactic = TTARepoCards.Instance.GetTactic(values["tactic"]);

  for (let key in values) {
    let value = values[key];
    //console.log(key + " => " + value);
    if (!key.includes("_"))
    {
      let card = TTARepoCards.Instance.Get(key);
      if (card!=null)
      {
        if (card.code.startsWith("MIN"))
          s.Infantry.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("MCA"))
          s.Cavallery.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("MAR"))
          s.Artillery.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("MAI"))
          s.AirForce=(MakeBoardCard(card, values));
        else if (card.code.startsWith("WON"))
          s.Wonders.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("P"))
          s.Productions.push(MakeBoardCard(card, values));
        else if (card.code.startsWith("U"))
          s.Urbans.push(MakeBoardCard(card, values));
      }
    }
  }
  console.log(s);
  console.log("CalculateScene: END");
  StrenghtCalculation(s);
}

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      errors,
      values
    };
  }

  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
   };

  /**
   * Returns whether there are any errors in the errors object that is passed in
   * @param {IErrors} errors - The field errors
   */
  private haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    //console.log(this.state.values);
    CalculateScene(this.state.values);

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  /**
   * Executes the validation rules for all the fields on the form and sets the error state
   * @returns {boolean} - Whether the form is valid or not
   */
  private validateForm(): boolean {
    // TODO - validate form
    return true;
  }

  /**
   * Submits the form to the http api
   * @returns {boolean} - Whether the form submission was successful or not
   */
  private async submitForm(): Promise<boolean> {
    // TODO - submit the form
    return true;
  }

  public render() {
    const { submitSuccess, errors } = this.state;
    const context: IFormContext = {
        ...this.state,
        setValues: this.setValues
      };
    return (
      <FormContext.Provider value={context}>
      <form onSubmit={this.handleSubmit} noValidate={true}>
        <div className="container">
          
          {this.props.render()}

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.haveErrors(errors)}
            >
              Submit
            </button>
          </div>
          {submitSuccess && (
            <div className="alert alert-info" role="alert">
              The form was successfully submitted!
            </div>
          )}
          {submitSuccess === false &&
            !this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, an unexpected error has occurred
              </div>
            )}
          {submitSuccess === false &&
            this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, the form is invalid. Please review, adjust and try again
              </div>
            )}
        </div>
      </form>
      </FormContext.Provider>
    );
  }
}