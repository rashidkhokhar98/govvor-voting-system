/**
 *
 * AddBillPage
 *
 */

import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MenuBar from '../../components/MenuBar';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  heading: yup.string().required(),
  description: yup.string().required(),
 
 
});
export function AddBillPage() {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState('');

  const onSubmitt = data => {
    console.log('data', data);
    setFormData({ ...data });
    reset();
  };
  return (
    <div className="cntainer-fluid row " >
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark " style={{height: '1000px' }}>
      <MenuBar/>
    </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 ">
    <div className="row justify-content-center ">
    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 bg-dark  pb-3 pt-3 mt-2 border text-light rounded ">
      <form onSubmit={handleSubmit(onSubmitt)}>
      
        <div className="row">
          
          <div className="form-group col">
            <label htmlFor="heading">Bill Heading</label>
            <textarea
              type="text"
              name="heading"
              className="form-control"
              id="heading"
             rows="1"
              placeholder="Write Bill Heading"
              ref={register}
            />
            <div style={{ color: 'red' }}>
              {errors && errors.heading && '* Heading is required field'}
            </div>
           
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label htmlFor="description">Bill Description</label>
            <textarea
              type="text"
              name="description"
              className="form-control"
              id="description"
              rows="10"
              placeholder="Write Bill Description"
              ref={register}
            />
            <div style={{ color: 'red' }}>
              {errors && errors.description && '* Description is required field'}
            </div>
          </div>
          </div>

        <div className="row ">
          <div className="col text-center">
              <button type="submit" className="btn btn-primary">
                Add Bill
              </button>
              </div>

        </div>
      </form>
    </div>
    </div>
  
    </div>
    </div>

  );
}

AddBillPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AddBillPage);
