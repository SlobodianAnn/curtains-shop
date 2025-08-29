import { Formik, Form, Field } from 'formik';
import './formik.css';

const FormBasic = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', phone: '', adress: '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="orderForm">
          <Field className="form-control" name="name" placeholder="Votre nom" required />
          <Field className="form-control" name="phone" placeholder="+33..." required />
          <Field className="form-control" name="adress" placeholder="Adresse" required />
          <button className="btn btn-primary" type="submit">
            Payer la commande
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormBasic;
