import React from 'react';

function ProductForm (props) {
  const {
    product = {},
    onSubmit = () => {},
    onChange = () => {}
  } = props;


     // const handleSubmit = event => {
     //   event.preventDefault();
     //   const form = event.currentTarget;
     //   const fData = new FormData(form);
     //   onSubmit({
     //     title: fData.get('title'),
     //     description: fData.get('description')
     //   });
     //   form.reset();
     // };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = name => event => {
  onChange({[name]: event.currentTarget.value});
  };

    return (
      <form
        className="ProductForm"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title">Title</label> <br />
          <input
            onChange={handleChange("title")}
            value={product.title}
            name="title"
            id="title"
          />
        </div>

        <div>
          <label htmlFor="description">Description</label> <br />
          <textarea
            onChange={handleChange("description")}
            value={product.description}
            name="description"
            id="description"
          />
        </div>

        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    );
  }

export {ProductForm};
