import { observable, action } from 'mobx';

export interface IStore {}

class Store implements IStore {
  @observable username = '';
	@observable base_url = '';
	@observable sort_order = '';

  @action
  setUserName(username: string): void {
    this.username = username;
  }

  @action
  setBaseUrl(baseurl: string): void {
    this.base_url = baseurl;
	}
	 
	@action
	setSortOrder(sort:string):void{
		this.sort_order=sort;
	}
}
const observableListStore = new Store();
export default observableListStore;
