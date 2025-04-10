package hu.backend.exception;

import com.auth0.jwt.exceptions.TokenExpiredException;
import hu.backend.dto.felhasznalo.ExceptionResponse;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.AccessDeniedException;

import static org.springframework.http.HttpStatus.*;

@RestControllerAdvice
public class ExceptionHandling implements ErrorController {
    private static final String INCORRECT_CREDENTIALS = "Helytelen a felhasználónév vagy a jelszó. Kérjük, próbálja újra!";

    private static final String NOT_ENOUGH_PERMISSION = "Ezen funkció használatához kérjük, jelentkezzen be!";

    private ResponseEntity<ExceptionResponse> createHttpResponse(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new ExceptionResponse(httpStatus.value(), httpStatus,
                httpStatus.getReasonPhrase().toUpperCase(), message), httpStatus);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ExceptionResponse> badCredentialsException() {
        return createHttpResponse(BAD_REQUEST, INCORRECT_CREDENTIALS);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ExceptionResponse> accessDeniedException() {
        return createHttpResponse(FORBIDDEN, NOT_ENOUGH_PERMISSION);
    }
    @ExceptionHandler(FelhasznaloNotFoundException.class)
    public ResponseEntity<ExceptionResponse> userNotFoundException(FelhasznaloNotFoundException exception) {
        return createHttpResponse(BAD_REQUEST, exception.getMessage());
    }

    @ExceptionHandler(TokenExpiredException.class)
    public ResponseEntity<ExceptionResponse> tokenExpiredException(TokenExpiredException exception) {
        return createHttpResponse(UNAUTHORIZED, exception.getMessage());
    }


}