package hu.backend.exception;

public class FelhasznaloNotFoundException extends RuntimeException {
    public FelhasznaloNotFoundException(String message) {
        super(message);
    }
}
