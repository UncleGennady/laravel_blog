<div class="mb-3">
    <label for="firstName" class="form-label">First Name</label>
    <input autofocus type="text" name='firstName' class="form-control" id="firstName" placeholder="John"
        value="{{ old('firstName') }}" required>
    @error('firstName')
        <p class="mt-2 text-danger">
            {{ $message }}
        </p>
    @enderror
</div>

<div class="mb-3">
    <label for="lastName" class="form-label">Last Name</label>
    <input type="text" name='lastName' class="form-control" id="lastName" placeholder="Dou"
        value="{{ old('lastName') }}" required>
    @error('lastName')
        <p class="mt-2 text-danger">
            {{ $message }}
        </p>
    @enderror
</div>

<div class="mb-3">
    <label for="inputEmail" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="inputEmail" placeholder="example@gmail.com"
        value="{{ $errors->has('email') ? '' : old('email') }}" required>
    @error('email')
        <p class="mt-2 text-danger">
            {{ $message }}
        </p>
    @enderror
</div>

<div class="mb-3">
    <label for="inputPassword" class="form-label">Password</label>
    <input type="password" name='password' class="form-control" id="inputPassword" placeholder="Minimum 7 characters"
        required>
    @error('password')
        <p class="mt-2 text-danger">
            {{ $message }}
        </p>
    @enderror
</div>

<div class="mb-3">
    <label for="password_confirmation" class="form-label">Repeat your password</label>
    <input type="password" name='password_confirmation' class="form-control" id="password_confirmation" required
        placeholder="Minimum 7 characters">
    @if ($errors->has('password') && count($errors->get('password')) > 1)
        <p class="mt-2 text-danger">
            {{ $errors->get('password')[1] }}
        </p>
    @endif
</div>

<div class="mb-3 form-check">
    <input type="checkbox" name='agreement' class="form-check-input " id="agreement" required>
    <label class="form-check-label" for="agreement">I agree all statements in Terms of service</label>
    @error('agreement')
        <p class="mt-2 text-danger">
            {{ $message }}
        </p>
    @enderror
</div>

<button type="submit" class="btn btn-success">Register</button>
