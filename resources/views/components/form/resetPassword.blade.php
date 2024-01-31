<input type="hidden" name="token" value="{{ $request->token }}">
<div class="mb-3">
    <label for="inputEmail" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="inputEmail" placeholder="example@gmail.com"
        value="{{ $errors->has('email') ? '' : old('email', $request->email) }}" required>
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

<button type="submit" class="btn btn-success">Reset</button>
