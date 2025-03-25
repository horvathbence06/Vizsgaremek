package hu.backend.config;

import hu.backend.auth.JwtAccessDeniedHandler;
import hu.backend.auth.JwtAuthenticationEntryPoint;
import hu.backend.auth.JwtAuthorizationFilter;
import jakarta.servlet.DispatcherType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfiguration {
    private JwtAuthorizationFilter jwtAuthorizationFilter;
    private JwtAccessDeniedHandler jwtAccessDeniedHandler;
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private UserDetailsService userDetailsService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    public static final String[] PUBLIC_URLS = {
            "/felhasznalo/login", "/idopont/{id}", "/idopont", "/idopont/list-all",
            "/korhaz/{id}", "/korhaz/list-all",
            "/orvos/{id}", "/orvos/list-all", "/orvos/filter/by-korhaz", "orvos/filter/by-korhaz-and-szakterulet",
            "/szakterulet/{id}", "/szakterulet/list-all",
            "szolgaltatas/{id}", "szolgaltatas/list-all",
            "/swagger-ui/**", "/swagger-resources/**",
            "/v2/api-docs", "/v3/api-docs", "/v3/api-docs/**",
    };
    @Autowired
    public SecurityConfiguration(JwtAuthorizationFilter jwtAuthorizationFilter,
                                 JwtAccessDeniedHandler jwtAccessDeniedHandler,
                                 JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
                                 @Qualifier("userDetailsService")UserDetailsService userDetailsService,
                                 BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.jwtAuthorizationFilter = jwtAuthorizationFilter;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Bean
    public AuthenticationManager getAuthenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService);
        AuthenticationManager authenticationManager = authenticationManagerBuilder.build();
        return authenticationManager;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(request -> request
                        .dispatcherTypeMatchers(DispatcherType.FORWARD, DispatcherType.ERROR).permitAll()
                        .requestMatchers(PUBLIC_URLS).permitAll()
                        .requestMatchers(HttpMethod.POST, "/felhasznalo/login").permitAll()
                        .requestMatchers(HttpMethod.GET, "/idopont/{id}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/idopont").permitAll()
                        .requestMatchers(HttpMethod.GET, "/idopont/list-all").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/idopont/{id}").hasAuthority("DELETE_IDOPONT")
                        .requestMatchers(HttpMethod.GET, "/korhaz/{id}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/korhaz/list-all").permitAll()
                        .requestMatchers(HttpMethod.POST, "/korhaz").hasAuthority("CREATE_KORHAZ")
                        .requestMatchers(HttpMethod.PUT, "/korhaz/{id}").hasAuthority("UPDATE_KORHAZ")
                        .requestMatchers(HttpMethod.DELETE, "/korhaz/{id}").hasAuthority("DELETE_KORHAZ")
                        .requestMatchers(HttpMethod.GET, "/orvos/{id}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/orvos/list-all").permitAll()
                        .requestMatchers(HttpMethod.GET, "/orvos/filter/by-korhaz").permitAll()
                        .requestMatchers(HttpMethod.GET, "/orvos/filter/by-korhaz-and-szakterulet").permitAll()
                        .requestMatchers(HttpMethod.POST, "/orvos").hasAuthority("CREATE_ORVOS")
                        .requestMatchers(HttpMethod.PUT, "/orvos/{id}").hasAuthority("UPDATE_ORVOS")
                        .requestMatchers(HttpMethod.DELETE, "/orvos/{id}").hasAuthority("DELETE_ORVOS")
                        .requestMatchers(HttpMethod.GET, "/szakterulet/{id}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/szakterulet/list-all").permitAll()
                        .requestMatchers(HttpMethod.POST, "/szakterulet").hasAuthority("CREATE_SZAKTERULET")
                        .requestMatchers(HttpMethod.DELETE, "/szakterulet/{id}").hasAuthority("DELETE_SZAKTERULET")
                        .requestMatchers(HttpMethod.GET, "/szolgaltatas/{id}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/szolgaltatas/list-all").permitAll()
                        .requestMatchers(HttpMethod.POST, "/szolgaltatas").hasAuthority("CREATE_SZOLGALTATAS")
                        .requestMatchers(HttpMethod.PUT, "/szolgaltatas/{id}").hasAuthority("UPDATE_SZOLGALTATAS")
                        .requestMatchers(HttpMethod.DELETE, "/szolgaltatas/{id}").hasAuthority("DELETE_SZOLGALTATAS")
                        .anyRequest().authenticated()
                )


                .httpBasic(withDefaults())
                .formLogin(withDefaults())
                .exceptionHandling((exception)-> exception.authenticationEntryPoint(jwtAuthenticationEntryPoint)
                        .accessDeniedHandler(jwtAccessDeniedHandler))
                .authenticationManager(getAuthenticationManager(http))

                .sessionManagement(sess -> sess.sessionCreationPolicy(STATELESS)
                )

                .addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}
