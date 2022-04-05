import { Formik, Form, Field } from "formik";
import "./components/Header.css";
const App = () => {
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            //API call
            console.log(values);
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
