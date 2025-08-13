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
          <Field className="form-control" name="name" placeholder="Ваше имя" required />

          <Field className="form-control" name="phone" placeholder="+7..." required />

          <button className="btn btn-primary" type="submit">
            Оформить заказ
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormBasic;
