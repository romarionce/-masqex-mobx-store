# mobx-one-line
Simple method for create Mobx Store with React.Context 

bun install :
```bash
bun i mobx-one-line
```
npm install:
```bash
npm i mobx-one-line
```
## Usage

### #1. Create Store
```typescript
import { makeAutoObservable } from "mobx";
import { Store } from "mobx-one-line";
export class CounterModel {
  counter = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment = () => this.counter++;
  decrement = () => this.counter--;
}

export const CounterUtil = new Store(CounterModel);
```

### #2.1 Use Util.Provider component
```tsx
export const ProfilePage = () => {
	const counterStore = new CounterModel();

	return (
	<CounterUtil.Provider value={counterStore}>
    	<CountWidget />
	</CounterUtil.Provider>
	);
};
```

### #2.2 or use MultiProvider 
```typescript
export const ProfilePage = () => {
	const counterStore1 = new CounterStore();
	const counterStore2 = new CounterStore();

	return (
		<MultiProvider
			providers={[
				<CounterUtil.Provider value={counterStore1} />,
				<CounterUtil2.Provider value={counterStore2} />,
			]}
		>
			<CountWidget />
		</MultiProvider>
	);
};
```
### #3 UseStore in widget
```typescript
export const CountWidget = observer(() => {
	const { counter, increment, decrement } = CounterUtil.store();
	return (
		<div>
			<p>Base Store is {counter}</p>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</div>
	);
});
```