import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./views/Contacts.jsx";
import AddContact from "./views/AddContact.jsx";
import injectContext from "./store/appContext.jsx";

const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						{/* <Route exact path="/index.html" component={Contacts} /> */}
						<Route exact path="/" element={<Contacts/>} />
						<Route exact path="/contacts" element={<Contacts/>} />
						<Route exact path="/add" element={<AddContact/>} />
						<Route exact path="/edit" element={<AddContact/>} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}
export default injectContext(Layout);