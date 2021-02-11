import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { connect } from 'react-redux';

import { ICollectionData } from './interfaces';
import { ActionCreators } from './actions';
import { PrimaryButton } from 'office-ui-fabric-react';
import { ApplicationState } from '../../store/index';

interface IConnectedDispatch {
	setTitle: (title: string) => void;
	getListSuministros: () => void;
}

interface IConnectedState {
  title: string;
  collectionData: Array<ICollectionData>;
}

//Map the application state to the properties of the Components. Making them available in this.props inside the component.
function mapStateToProps(state: ApplicationState, ownProps: IHelloWorldProps): IConnectedState {
	return {
    title: state.helloWorld.title,
    collectionData: state.helloWorld.collectionData,
	};
}

//Map the actions to the properties of the Component. Making them available in this.props inside the component.
const mapDispatchToProps = (dispatch): IConnectedDispatch => ({
	setTitle: (title: string) => {
		dispatch(ActionCreators.setTitle(title));
  },
  getListSuministros: () => {
    dispatch(ActionCreators.getListSuministros());
  }
});

type IClassProps = IHelloWorldProps & IConnectedState & IConnectedDispatch;

class HelloWorld extends React.Component<IClassProps, {}> {

  constructor(props: IClassProps){
    super(props);
  }

  componentDidMount() {
    this.props.getListSuministros();
  }

  private _clic(){
    this.props.setTitle("newTitle");
  }

  public render() {
    const { title, collectionData } = this.props;
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>{title}</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <PrimaryButton text="Change title" onClick={this._clic.bind(this)} />
              <div>
                {collectionData.map(item => <p>{item.Title}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);