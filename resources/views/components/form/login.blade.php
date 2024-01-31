<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="example@gmail.com" value="{{ old('email') }}" required>
    @error('email')
        <p class="mt-2 text-danger">
            {{ $message }}
        </p>
    @enderror
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>

<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="************"
        required>
    @error('password')
        <p class="mt-2 text-danger">
            {{ $message }}
        </p>
    @enderror
</div>

<div class="mb-3 form-check d-flex justify-content-between">
    <div>
        <input type="checkbox" name="remember" class="form-check-input " id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Keep me signed</label>
    </div>
    <a href="/forgot-password" class=" fs-6 text-decoration-none fw-bold link-success text-bold">Forgot your password
        ?</a>
</div>

<button type="submit" class="btn btn-success">Login</button>
