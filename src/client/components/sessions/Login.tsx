import BazarButton from "@client/components/BazarButton";
import BazarTextField from "@client/components/BazarTextField";
import { H3, Small } from "@client/components/Typography";
import { Card, CardProps, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMutation } from "urql";
import { CommercialCategory } from '@client/graphql/types.generated'
import { useCreatePreUserBrandMutation } from '@client/graphql/createPreUserBrand.generated'
import { useFormik } from "formik";
import toast from "react-hot-toast";

import { useRouter } from "next/router";
import React from "react";
import * as yup from "yup";
import BazarSelectField from "../BazarSelectField";
import { CreatePreUserBrandInput } from "@client/graphql/types.generated";

const fbStyle = { background: "#3B5998", color: "white" };
const googleStyle = { background: "#4285F4", color: "white" };

const StyledCard = styled<React.FC<CardProps>>(
	({ children, ...rest }) => (
		<Card {...rest}>{children}</Card>
	)
)<CardProps>(({ theme }) => ({
	width: 500,
	[theme.breakpoints.down("sm")]: { width: "100%" },

	".content": {
		textAlign: "center",
		padding: "3rem 3.75rem 0px",
		[theme.breakpoints.down("xs")]: { padding: "1.5rem 1rem 0px" },
	},
	".facebookButton": {
		marginBottom: 10,
		"&:hover": fbStyle,
		...fbStyle,
	},
	".googleButton": {
		"&:hover": googleStyle,
		...googleStyle,
	},
	".agreement": {
		marginTop: 12,
		marginBottom: 24,
	},
}));

const VALUE_CATEGORIES = ['INDUMENTARIA', 'BLANQUERIA', 'CUIDADO', 'VARIOS']

interface LoginProps {
	toggleDialog: () => void
}

const Login: React.FC<LoginProps> = ({toggleDialog}) => {
	const [, CreatePreUserBrand] = useCreatePreUserBrandMutation()

	
	const handleFormSubmit = async (values: CreatePreUserBrandInput) => {
		 console.log("createPreUserBrand: ", CreatePreUserBrand);
		 values['contactPhone'] = Number(values.contactPhone)
		const v = { input: values}
		toast.promise(
			CreatePreUserBrand(v).then(toggleDialog),
			{
			  loading: 'Registrando....',
			  success: () => `¡Registrado! El equipo de Discoverit se contactará enseguida.`,
			  error: (err) => `This just happened: ${err.toString()}`,
			},
			{
			  style: {
					minWidth: '250px',
			  },
			  success: {
					duration: 4000,
					icon: '🔥',
			  },
			}
		  )
		
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
    	onSubmit: handleFormSubmit,
    	initialValues,
    	validationSchema: formSchema,
    });


	return (
		<StyledCard elevation={3}>
			<form className="content" onSubmit={handleSubmit}>
				<H3 textAlign="center" mb={1}>
          Discoverit
				</H3>
				<Small
					fontWeight="600"
					fontSize="16px"
					color="grey.900"
					textAlign="center"
					mb={4.5}
					display="block"
				>
					Bienvenido al pre registro de Discoverit. Llena los datos y te vamos a estar contactando a la brevedad.
				</Small>

				<BazarTextField
					mb={1.5}
					name="contactMail"
					label="Email"
					placeholder="exmple@mail.com"
					variant="outlined"
					size="small"
					type="email"
					fullWidth
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.contactMail || ""}
					error={!!touched.contactMail && !!errors.contactMail}
				/>
				<BazarTextField
					mb={1.5}
					name="contactPhone"
					label="Teléfono"
					placeholder="codigo de area (sin cero) + número. Ej: 1195607122"
					variant="outlined"
					size="small"
					type="phone"
					fullWidth
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.contactPhone || ""}
					error={!!touched.contactPhone && !!errors.contactPhone}
				/>
				<BazarTextField
					mb={1.5}
					name="taxId"
					label="Cuit"
					placeholder="20342452501"
					variant="outlined"
					size="small"
					type="number"
					fullWidth
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.taxId || ""}
					error={!!touched.taxId && !!errors.taxId}
				/>
				<BazarSelectField 
					mb={1.5}
					name="commercialCategory"
					label="Categoría comercial"
					placeholder="exmple@mail.com"
					variant="outlined"
					size="small"
					type="email"
					fullWidth
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.commercialCategory || ""}
				>
					{
						VALUE_CATEGORIES.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)
					}
				</BazarSelectField>

				<BazarButton
					variant="contained"
					color="primary"
					type="submit"
					fullWidth
					sx={{
						mb: "1.65rem",
						height: 44,
					}}
				>
          			Registrarme
				</BazarButton>
			</form>
		</StyledCard>
	);
};



const initialValues: CreatePreUserBrandInput = {
	contactMail: "",
	contactPhone: 0,
	taxId: 0,
	commercialCategory: CommercialCategory.Blanqueria
};

const formSchema = yup.object().shape({
	contactMail: yup.string().email("invalid email").required("El campo ${path} es requerido."),
	contactPhone: yup.number().optional(),
	taxId: yup.number().required().required("El campo ${path} es requerido."),
	commercialCategory: yup.string().required("El campo ${path} es requerido.")
});

export default Login;
