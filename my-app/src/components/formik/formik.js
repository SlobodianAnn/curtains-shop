import { Formik, Form, Field } from 'formik';
import './formik.css';

const FormBasic = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="orderForm">
          <Field className="form-control" name="name" placeholder="Your name" required />

          <Field className="form-control" name="phone" placeholder="+33..." required />
          <Field className="form-control" name="adress" placeholder="Аdress" required />

          <button className="btn btn-primary" type="submit">
            Оплатить заказ
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormBasic;
