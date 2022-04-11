// Generated by https://quicktype.io

export interface LoginResponse {
    codigo:        string;
    mensaje:       string;
    usuario:          Usuario;
    mensaje_error: string;
    token:         string;
}

export interface Usuario {
    id:                   number;
    usuario:              string;
    fecha_creacion:       string;
    nombre:               string;
    apellido:             string;
    correo:               string;
    id_institucion:       number;
    estado:               string;
    foto:                 null;
    password:             string;
    last_access:          null;
    foto_banner:          null;
    id_persona:           number;
    password2:            string;
    id_emprendedor:       null;
    id_usuario:           number;
    url_foto:             null;
    url_foto_banner:      null;
    id_asistente_tecnico: null;
    id_mentor:            null;
    emprendedor:          number;
    mesa_servicio:        number;
    mentor:               number;
    asistencia_tecnica:   number;
    administrador:        number;
    supervisorProveedor:  number;
    asesor:               number;
    inscripciones:        Inscripcion[];
}

export interface Inscripcion {
    id_inscripcion:              number;
    estado_inscripcion:          string;
    fase:                        number;
    id_emprendimiento:           null;
    nombre_comercial:            null;
    nombre_emprendimiento:       null;
    ruc_emprendimiento:          null;
    razon_social_emprendimiento: null;
}

export interface LoginData {
    correo:                     string;
    password:                   string;
}
