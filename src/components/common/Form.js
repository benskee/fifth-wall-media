import Joi from 'joi-browser'
import Input from './Input';
import Select from './Select';
import ConfirmPassword from './ConfirmPassword';

    const validate = () => {
        const result = Joi.validate(this.state.data, this.schema, { abortEarly: false })
        if (!result.error) return null;

        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors
    }

    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null;
    }

    const handleSubmit= e => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({  errors: errors || {} })
        if (errors) return

        this.doSubmit();
    }

    const handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

        const data = {...this.state.data}
        data[input.name] = input.value
        this.setState({ data, errors })
    }

    const renderInput = (name, label, type = "text") => {
        const { data, errors } = this.state;

        return (
        <Input
            type={type}
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]}
        />
        );
    }
    
    const renderConfirmPassword = (name, label) => {
        const { data, errors, submitted } = this.state;

        return (
        <ConfirmPassword
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]}
            submitted={submitted}
        />
        );
    }

    const renderButton = (label) =>{
        return (
            <button disabled={this.validate()} className="btn btn-primary mt-3">
                {label}
            </button>
        );
    }

    const renderSelect = (name, label, options) =>{
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    const renderFileSelect = (error) =>{
        return(
            <div>
                <div className="input-group mt-3">
                    <input type="file" name='selectedFile' id='selectedFile' encType="multipart/form-data" onChange={this.fileSelectedHandler} />
                </div>
                {error && <div className="alert alert-danger py-1">{error}</div>}
            </div>
        )
    }

    const fileSelectedHandler = e => {
        const newData = {...this.state.data}
        newData.selectedFile = e.target.files[0]
        this.setState({
            data: newData
        });
    };

    const Form = {
        validate,
        validateProperty,
        handleSubmit,
        renderInput,
        handleChange,
        renderConfirmPassword,
        renderButton,
        renderSelect,
        renderFileSelect,
        fileSelectedHandler,
        
    }

export default Form