import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form , ErrorMessage} from 'formik';
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)
const Register = () => {
    const history = useHistory();
    const navigateTo= (path) =>{
        history.push(path);
            }
    const initialCredentials = { 
        email: '',
        password: ''
        }
    return (
        <div>
        <center>
            <h1>WELCOME TO REGISTER</h1>
            <h4>Login Form</h4>
        {/* CONFIGUTACION OJO AQUI RECIBE PROPS */}
                <Formik
                //Valores iniciales 
                initialValues= { initialCredentials } 
                //Yup Validaciones esquemas
                validationSchema= {loginSchema}
                //Evento de envio de datos
                    onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    //Para almacenar en los caches - We save the data on Browser
                     await localStorage.setItem('credentials', values);
                    history.push('/home');
                }}
                >
                
               
                   
                {({ errors, 
                touched , 
                isSubmitting 
                }) => (
                    <Form>
                    <label htmlFor="nombre">Nombre: </label>
                            <Field
                                id="nombre"
                                name="nombre"
                                placeholder="nombre"
                                type="nombre"
                            />
                            <br></br>
                            <label htmlFor="apellido">Apellido: </label>
                            <Field
                                id="apellido"
                                name="password"
                                placeholder="apellido "
                                type="apellido"
                            />
                            <br></br>
                            <label htmlFor="email">Email: </label>
                            <Field id="email" name="email" placeholder="example@email.com" />
                            <br></br>
                           
                           {/* MUESTRA LOS ERRORES DEL EMAIL */}
                            {
                                errors.email && touched.email &&
                                (
                                    
                                        <ErrorMessage name = 'email' component='div'></ErrorMessage>
                                    
                                )
                            }
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password   "
                                type="password"
                            />
                            <br></br>
                             {/* MUESTRA LOS ERRORES DE LA CONTRASEÑA */}
                             {
                                errors.password && touched.password &&
                                (
                                    ( //Mostramos el error en caso de ser invalido con un DIV
                                    <div>
                                        <ErrorMessage name = 'password'></ErrorMessage>
                                    </div>   
                                    )
                                )
                            }
                           <center><button type="submit">Log In</button></center>  
                             {isSubmitting ? (<p>Sending....</p> ): null}
                             <span>    </span>
                      </Form>
                )
                }
                  
                </Formik>
                <br></br>
            <button onClick={() => navigateTo('/login')}> GO BACK TO Login</button>
            </center>
        </div>
    );
}


export default Register;
