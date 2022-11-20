import { Textarea } from '@chakra-ui/react';
import React from 'react';
import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';

const AllJobs = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    description,
    postUrl,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    /* if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    } */
    if(isEditing) {
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'} </h3>
        {showAlert && <Alert />}

        {/* position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* description */}
          <FormRow
            type="text"
            labelText="description"
            name="description"
            value={description}
            handleChange={handleJobInput}
          />
          <Textarea
            name="description"
            value={description}
            handleChange={handleJobInput}
          />
          {/* postUrl */}
          <FormRow
            type="text"
            labelText="Post URL"
            name="postUrl"
            value={postUrl}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}

          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* job type */}
          <FormRowSelect
            labelText="type"
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AllJobs;
