import { Formik, Form, Field } from "formik";
import "./components/Header.css";
const App = () => {
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
                },
              }
            );
            const data = await response.json();
            console.log(data);
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default App;
