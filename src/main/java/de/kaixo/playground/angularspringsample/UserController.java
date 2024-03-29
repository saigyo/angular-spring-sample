package de.kaixo.playground.angularspringsample;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

  private final UserRepository userRepository;

  public UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @GetMapping("/users")
  public List<User> getUsers() {
    return (List<User>) userRepository.findAll();
  }

  @GetMapping("/users/{id}")
  public User getUser(@PathVariable long id) {
    return userRepository.findById(id).orElse(null);
  }

  @PostMapping("/users")
  void addUser(@RequestBody User user) {
    userRepository.save(user);
  }

  @PutMapping("/users")
  void updateUser(@RequestBody User user) {
    if (userRepository.existsById(user.getId())) {
      userRepository.save(user);
    }
  }

  @DeleteMapping("/users/{id}")
  void deleteUser(@PathVariable long id) {
    userRepository.deleteById(id);
  }
}
