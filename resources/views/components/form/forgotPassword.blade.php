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
<button type="submit" class="btn btn-success">Send reset link</button>
